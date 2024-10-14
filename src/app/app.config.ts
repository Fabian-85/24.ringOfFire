import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-c32cc","appId":"1:543817566676:web:838a3e7e867c4f1c2a2e41","storageBucket":"ring-of-fire-c32cc.appspot.com","apiKey":"AIzaSyDwvAxivCkQNPLT57bS65XlVtFdMAMSJxI","authDomain":"ring-of-fire-c32cc.firebaseapp.com","messagingSenderId":"543817566676"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]

   
};
