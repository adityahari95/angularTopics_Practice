import { AccountsService } from "./../accounts.service";
import { loggingService } from "./../logging.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  //providers: [loggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logService: loggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log("A server status changed, new status: " + status);
    //this.logService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
