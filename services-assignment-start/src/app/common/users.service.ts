import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { UserStatus } from './user-status.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [{
    Max: UserStatus.Active,
    Anna: UserStatus.Active,
    Chris: UserStatus.Inactive,
    Manu: UserStatus.Inactive
  }]

  statusUpdated = new EventEmitter<string>();

  constructor(private counterService: CounterService) { }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countToActive();
  }

  changeStatus(user: string) {
    if (this.users.user === UserStatus.Active) {
      
    }
  }
}
