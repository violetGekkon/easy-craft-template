import {Component, OnInit} from '@angular/core';
import {AuthService, PermissionMap, UserInfo} from "@easy-craft/auth";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'ec-root',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {

  user: UserInfo | null = this._authService.user;
  userScope: PermissionMap | null = null;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.userScope = this._authService.permissionsMap;
  }
}
