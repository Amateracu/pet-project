import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  EMPLOYEES_BREADCRUMB,
  EMPLOYEES_PROFILE_BREADCRUMB,
  HOME_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.component.html',
  styleUrls: ['./employees-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesProfileComponent implements OnInit {
  constructor(public breadcrumbsService: BreadcrumbsService) {}

  public ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb([
      HOME_BREADCRUMB,
      EMPLOYEES_BREADCRUMB,
      EMPLOYEES_PROFILE_BREADCRUMB,
    ]);
  }
}
