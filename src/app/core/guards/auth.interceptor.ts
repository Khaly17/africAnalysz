import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); 

  const clonedReq = token 
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
    : req;

  return next(clonedReq);
};

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          console.error('Non autorisé, redirection vers la page de connexion...');
        }
        return throwError(() => err);
      })
    );
};

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(LoadingService);
    loadingService.show();
  
    return next(req).pipe(
      finalize(() => loadingService.hide())
    );
};