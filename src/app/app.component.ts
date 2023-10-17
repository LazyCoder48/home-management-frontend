import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector     : 'app-root',
  templateUrl  : './app.component.html',
  styleUrls    : ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  title = 'Home-Finance-Management-Frontend';
  isUserLoggedIn: boolean = false;
  showHeader: boolean     = true;
  items: MenuItem[] = [];

  constructor(@Inject('route') private route: Route, private router: Router, private activatedRoute: ActivatedRoute, private commonService: CommonService) {
    localStorage.setItem('loggedInUser', `{"token":"token"}`);
  }

  // model: MenuItem    = {label: 'Home', icon: 'pi pi-home', routerLink: '/'};

  ngOnInit(): void {

    this.isUserLoggedIn = this.commonService.validateUser();
    console.log(this.router.url);
    this.items = [
      {
        label : `<span class="text-3xl fc-bold">Home Management</span></a>`,
        escape: false,
        items : [
          {
            label                  : '<span class="text-sm fc-semi-bold">Dashboard</span>',
            escape                 : false,
            icon                   : 'pi pi-home',
            routerLink             : '/app/dashboard',
            routerLinkActiveOptions: {exact: true, activeClass: 'active'}
          },
        ]
        // icon      : 'pi pi-home',
        // iconClass : 'text-3xl',
        // routerLink: '/app/dashboard',

      },
      {
        label : '<span class="text-xl fc-semi-bold">Budget</span>',
        escape: false,
        icon  : 'pi pi-money-bill',
        items :
          [
            {
              label                  : '<span class="text-sm fc-semi-bold">Create</span>',
              escape                 : false,
              icon                   : 'pi pi-plus',
              iconClass              : 'text-sm',
              routerLink             : '/app/new-budget',
              routerLinkActiveOptions: {exact: true, activeClass: 'active'}
            },
            {
              label     : '<span class="text-sm fc-semi-bold">View</span>',
              escape    : false,
              icon      : 'pi pi-eye',
              iconClass : 'text-sm',
              routerLink: '/app/view-budgets'
            }
          ]
      },
    ];


    // this.items = [{
    //   label: 'Menu',
    //   items: [
    //     {label: 'Home', icon: 'pi pi-home', routerLink: ['/app/dashboard']},
    //     {
    //       label: 'Budget',
    //       items: [
    //         {label: 'Create Budget', escape: false, icon: 'pi pi-plus', routerLink: ['/app/new-budget']},
    //         {label: 'View Budget', escape: false, icon: 'pi pi-eye', routerLink: ['/app/budget']}
    //       ]
    //     }
    //     // {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
    //     // {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
    //   ]
    // }];
    this.activatedRoute.snapshot.url.forEach((route: any) => {
      console.log(route.path);
      if (route.path === 'login') {
        this.showHeader = false;
      }
    });

  }

}
