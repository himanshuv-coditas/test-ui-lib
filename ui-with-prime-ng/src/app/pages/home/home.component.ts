import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Projects, CardTypes, ButtonVariants } from '../../../../projects/ui-lib/src/lib/types/app';
import { UiButtonComponent, UiCardComponent } from '../../../../projects/ui-lib/src/public-api';
@Component({
  selector: 'app-home',
  imports: [UiButtonComponent, UiCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {
    const selectedProject = localStorage.getItem('selectedProject');
    if (selectedProject) {
      this.selectedProject.set(selectedProject as Projects);
      this.router.navigate([selectedProject]);
    }
  }
  public readonly cardTypes = CardTypes;
  public readonly projects = Projects;
  public readonly buttonVariants = ButtonVariants;
  public selectedProject = signal<Projects | null>(null);
  public visibleSidebar = false;
  title = 'ui-with-prime-ng';
  public onBoadingHeader: string = 'Student Onboarding';
  public onBoadingSubHeader: string = 'Create your student profile';

  public setSelectedProject(project: string) {
    this.selectedProject.set(project as Projects);
    localStorage.setItem('selectedProject', project);
  }
}
