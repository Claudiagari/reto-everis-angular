import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-registerMembers',
  templateUrl: './registerMembers.component.html'
})
export class RegisterMembersComponent {
  member: any = {}
   constructor(private membersService:MembersService) {
  }
  saveMember() {
    this.member.id = Date.now();
    this.membersService.saveMember(this.member)
    alert('Se registro colaborador con éxito!')
    this.member = {};
  }
}