export class Restaurant {
  public delete: boolean = false;
  public reviews: number[] = [];
  public waits: number[] = [];
  constructor(public name: string, public specialty: string, public address: string, public price: string){

  }

  addReview(reviewScore: number): void {
    this.reviews.push(reviewScore);
  }
  getReviewAvg(): string {
    if (this.reviews.length > 0) {
      var reviewSum: number = 0;
      for (var i: number = 0; i < this.reviews.length; i++) {
        reviewSum += this.reviews[i]
      }
      var reviewScore: number = (reviewSum / this.reviews.length);
      return reviewScore.toString().substring(0, 4);
    } else {
      return "Not yet rated"
    }
  }
  // addWait(waitTime: number): void {
  //   this.waits.push(waitTime);
  // }
  // getWaitAvg(): number {
  //   var waitSum: number = 0;
  //   for (var i: number = 0; i < this.waits.length; i++) {
  //     waitSum += this.waits[i]
  //   }
  //   return waitSum / this.waits.length;
  // }
}
