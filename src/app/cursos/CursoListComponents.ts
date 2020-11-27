import { Component, OnInit } from '@angular/core';
import {Curso} from './curso';
// app para referenciar um componente
// template pode ser statico
@Component({
    selector: 'app-couse-list',
    templateUrl: './curso-list.component.html'
})
export class CursoListComponents implements OnInit{
    cursos: Curso[] = [];

    ngOnInit(): void {
        this.cursos = [
            {
                id: 1,
                name: "Curso1",
                imageUrl: '',
                price: 99.99,
                code: '23123',
                duration: 4,
                rating: 6 ,
                realeaseDate: 'Dezembro, 2, 2020'
            },
            {
                id: 1,
                name: "Curso2",
                imageUrl: '',
                price: 99.3,
                code: 'XXX123',
                duration: 4,
                rating: 10,
                realeaseDate: 'Dezembro, 2, 2020' 
            }
        ]
    }
}
