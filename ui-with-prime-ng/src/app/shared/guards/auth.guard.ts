import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const selectedProject = localStorage.getItem('selectedProject');
  console.log({selectedProject});
  if (selectedProject) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
