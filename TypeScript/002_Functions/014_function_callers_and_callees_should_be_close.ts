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
class PerfReviewData {
  public constructor(
    private readonly peerReviews: PeerReviews[],
    private readonly managerReview: ManagerData,
    private readonly selfReview: EmployeeData) {
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

  public getPerfReview(): PerfReviewData {
    const peerReviews = this.getPeerReviews();
    const managerReview = this.getManagerReview();
    const selfReview = this.getSelfReview();
    return new PerfReviewData(peerReviews, managerReview, selfReview);
  }

  private getPeers(): PeersData[] {
    return this.db.lookup(this.employee, 'peers');
  }

  private getManager(): ManagerData {
    return this.db.lookup(this.employee, 'manager');
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

  public getPerfReview(): PerfReviewData {
    const peerReviews = this.getPeerReviews();
    const managerReview = this.getManagerReview();
    const selfReview = this.getSelfReview();
    return new PerfReviewData(peerReviews, managerReview, selfReview);
  }

  private getPeerReviews(): PeerReviews[] {
    const peers = this.lookupPeers();
    return peers;
  }

  private lookupPeers(): PeersData[] {
    return this.db.lookup(this.employee, 'peers');
  }

  private getManagerReview(): ManagerData {
    const manager = this.lookupManager();
    return manager;
  }

  private lookupManager(): ManagerData {
    return this.db.lookup(this.employee, 'manager');
  }

  private getSelfReview(): EmployeeData {
    return {

    } satisfies EmployeeData;
  }
}
