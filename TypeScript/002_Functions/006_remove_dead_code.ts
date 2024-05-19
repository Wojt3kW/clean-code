// Nieżywy kod to kod, który nie jest używany w programie.
// Może to być nieużywana funkcja, zmienna, import, klasa, itp.
// Nieużywany kod powinien być usuwany, ponieważ jest tak samo zły jak duplikujący się kod.

export abstract class BadClassWithDeadCode {
  public async getData(): Promise<any> {
    const requestModel = this.requestModel('https://example.com');

    const response = await fetch(requestModel.url, {
      method: requestModel.method,
      headers: {
        'Content-Type': requestModel.contentType,
      },
    }).then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    });

    return response;
  }

  private requestModel(url: string): { url: string; method: string; contentType: string } {
    return {
      url,
      contentType: 'application/json',
      method: 'GET',
    };
  }

  private oldRequestModel(url: string): { url: string; contentType: string } {
    return {
      url,
      contentType: 'application/json',
    };
  }
}

export abstract class GoodClassWithoutDeadCode {
  public async getData(): Promise<any> {
    const requestModel = this.getRequestModel('https://example.com');

    const response = await fetch(requestModel.url, {
      method: requestModel.method,
      headers: {
        'Content-Type': requestModel.contentType,
      },
    }).then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    });

    return response;
  }

  private getRequestModel(url: string): { url: string; method: string; contentType: string } {
    return {
      url,
      contentType: 'application/json',
      method: 'GET',
    };
  }
}
