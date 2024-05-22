/* eslint-disable @typescript-eslint/no-extraneous-class */

// Deklaracje funkcji i miejsca ich wywołań powinny być blisko siebie

class Employee {
}
class PeersData {
}
class ManagerData {
}
class EmployeeData {
}
class PeerReviews {
}
class ReviewData {
  public constructor(
    private readonly _peerReviews: PeerReviews[],
    private readonly _managerReview: ManagerData,
    private readonly _selfReview: EmployeeData) {
  }
}
abstract class Review {
  protected readonly db: any;
  protected readonly employee: Employee;

  protected constructor(employee: Employee) {
    this.employee = employee;
  }
}

export class BadPerformanceReview extends Review {
  public constructor(employee: Employee) {
    super(employee);
  }

  public getReviewData(): ReviewData {
    const peerReviews = this.getPeerReviews();
    const managerReview = this.getManagerReview();
    const selfReview = this.getSelfReview();
    return new ReviewData(peerReviews, managerReview, selfReview);
  }

  private getPeers(): PeersData[] {
    return this.db.find(this.employee, 'peers');
  }

  private getManager(): ManagerData {
    return this.db.find(this.employee, 'manager');
  }

  private getPeerReviews(): PeerReviews[] {
    const peers = this.getPeers();
    return peers;
  }

  public getManagerReview(): ManagerData {
    const manager = this.getManager();
    return manager;
  }

  public getSelfReview(): EmployeeData {
    return {
    } satisfies EmployeeData;
  }
}

export class PerformanceReview extends Review {
  public constructor(employee: Employee) {
    super(employee);
  }

  public getReviewData(): ReviewData {
    const peerReviews = this.getPeerReviews();
    const managerReview = this.getManagerReview();
    const selfReview = this.getSelfReview();
    return new ReviewData(peerReviews, managerReview, selfReview);
  }

  private getPeerReviews(): PeerReviews[] {
    const peers = this.findPeers();
    return peers;
  }

  private findPeers(): PeersData[] {
    return this.db.find(this.employee, 'peers');
  }

  private getManagerReview(): ManagerData {
    const manager = this.findManager();
    return manager;
  }

  private findManager(): ManagerData {
    return this.db.find(this.employee, 'manager');
  }

  private getSelfReview(): EmployeeData {
    return {
    } satisfies EmployeeData;
  }
}
