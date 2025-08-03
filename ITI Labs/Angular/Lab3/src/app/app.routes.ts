import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Card } from './Components/card/card';
import { Details } from './Components/details/details';

export const routes: Routes = [
    {path: 'home' , component : Home},
    {path: 'cards' , component : Card} ,
    {path: 'Details/:id' , component : Details} 
];
