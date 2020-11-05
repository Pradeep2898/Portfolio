import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    particlesJS: any;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 1;
 
    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'triangle',
                },
        }
    };
    this.particlesJS.load('particles-js', 'particles.json', null);
    }
}
