import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../../_services/members.service';

import { MemberCardComponent } from "../member-card/member-card.component";
import { Member } from '../../_model/member';

@Component({
    selector: 'app-member-list',
    standalone: true,
    templateUrl: './member-list.component.html',
    styleUrl: './member-list.component.css',
    imports: [MemberCardComponent]
})
export class MemberListComponent implements OnInit {
  private memberService = inject(MembersService);
  members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    })
  }
}