import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
// import * as url from 'url';

@Component({
  selector: 'app-users-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  hashValue: string;
  constructor(private router: Router) {

    router.events.subscribe((val) => {
      // let temp = url.parse('http://localhost:8000/users/settings?a=123#manage-user');
      if (val instanceof NavigationEnd) {
        const tree: UrlTree = router.parseUrl(val.url);
        const grp: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const seg: UrlSegment[] = grp.segments;
        this.hashValue = tree.fragment;
        console.log(tree);
        if (!this.hashValue && seg[0].path === 'users' && seg[1].path === 'settings') {
          location.hash = 'change-password';
        }
      }
    });
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    location.hash = '';
  }

}
