// Nieżywy kod to kod, który nie jest używany w programie. Może to być nieużywana funkcja, zmienna, import, klasa, itp.
// Nieużywany kod powinien być usuwany, ponieważ jest tak samo zły jak duplikujący się kod.

export abstract class BadClassWithDeadCode {
  public async getData(): Promise<any> {
    const requestModel = this.requestModel('https://example.com');

    const response = await fetch(requestModel.url,
      {
        method: requestModel.method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json();
    });

    return response;
  }

  private requestModel(url: string): { url: string, method: string } {
    return { url, method: 'GET' };
  }

  private oldRequestModel(url: string): { url: string } {
    return { url };
  }
}

export abstract class GoodClassWithoutDeadCode {
  public async getData(): Promise<any> {
    const requestModel = this.getRequestProperties('https://example.com');

    const response = await fetch(requestModel.url,
      {
        method: requestModel.method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json();
    });

    return response;
  }

  private getRequestProperties(url: string): { url: string, method: string } {
    return {
      url,
      method: 'GET'
    };
  }
}
