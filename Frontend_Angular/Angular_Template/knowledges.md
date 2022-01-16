# Knowledges of Angular

## CMD Code:  
### Environment
    node -v  
    npm -v  
    
### Angular CLI
    npm install -g @angular/cli  
    ng -v  
    
### Create Project 
    ng new xxProject  
    
### Run project  
    cd xxProject  
    ng serve --port:8888  
    
### Bootstrap  
    1) npm install bootstrap --save (=npm i bootstrap -S)  
    *change angular.json>styles & app.component.html  
    OR:  
    2) use Bootstrap CDN  
    *change app.component.html  
    
### Create component  
    ng generate component xxComponent (=ng g c xxComponent)  
    *not generate test file by using '--spec false'  
    
### Split project  
    ng g c xxFunctionoperate  
    *not generate test file by using '--spec false'  
    ng g c xxDatashow  
    *not generate test file by using '--spec false'  
    
### Create Directives  
    ng generate directive xxDirective (=ng g d xxDirective)  
    *not generate test file by using '--spec false'  
    *change ngOnInit() & Constructor() > parameters & tags <p appxxx></p>  

## Concepts
### Structure:  
    index.html-> main.ts-> app.module.ts-> app.component (html/ts/css/spec.ts)  

### Debug:  
    Browser Extension: Angular angury  

### Import:  
    import {Component} from '@angular/core';  

### Change style:  
    xx.component.css  
    xx.component.ts> @component> styles  

### Encapsulation:  
    encapsulation: ViewEncapsulation.None  
    *Emulated:default value / None:global style / Native:local interface  

### Selector:  
    selector:'[app-servers]' => <div app-servers></div>  
    selector:'.app-servers'  => <div class='.app-servers'></div>  
    selector:'app-servers'   => <app-servers></app-servers>  

### Local pointing:  
    <input #input001>  
    <button (click)="ondosth(input001)"></button>  

## Data Transmission  
### Template Binding:  
#### Common:  
    {{ xx }} / {{ getXX() }} / {{ 'xx' }}  
    *use mainly by string  

#### Property Binding(parent->child):  
    [xx]='xxvalue'  
    *use mainly by judge/bool/composition/string/other  
    Self-defined property binding:  
        child: @input('xxalias') xx:{}  
        parent: yy=[]  
        <app-yy [xxalias]=yy>  

#### Event Binding(child->parent):  
    (click)="onCreateServer()"  
    (input)="onUpdateServer($event)"  
    Self-defined event binding:  
        child: @output('xxalias') xx=new EventEmitter<{aa:string,bb:string}>();  
               onDosth(){  
                   this.xx.emit({aa:this.a,bb:this.b;})  
               }  
        parent: <app-yy (xxalias)="onSthdo($event)">  
                onSthdo(xxData:{aa:string,bb:string}){this.xxElement.push({type:'xx',name:xxData.aa})}  

#### Two ways Binding:  
    [(ngModel)]="ServerName"  

### Directive (Structural/Attribute):  
#### *ngFor  
    <p *ngFor="let x of xx;let i=index" >  
        {{x.attr1}}  
    </p>  
    OR  
    <ng-template ngFor let-xx [ngForOf]="xxxx">  
    </ng-template>  
    
#### *ngIf  
    <p *ngIf="xx;else yy"></p>  
    <ng-template #yy>  
    OR  
    <div *ngIf="aa">  
        <li *ngFor="let b of bb">  
            {{ b }}  
        </li>  
    </div>  
    OR  
    <ng-template [ngIf]="!yy">
    </ng-template>  
    
#### ngSwitch  
    value=10;  
    <div [ngSwitch]="value">  
        <p *ngSwitchCase="5">555</p>  
        <p *ngSwitchCase="10">1010101</p>  
        <p *ngSwitchDefault>default</p>  
    </div>  
    
#### [ngStyle]  
    <p [ngStyle]="{color:getColor()}"></p>  
    <p [ngStyle]="{color:aa%2!==0?'red':'blue'}">  
    
#### [ngClass]  
    <p [ngClass]="{xxClass:aa%2!==0}"></p>  
    
#### Self-defined Attribute Directive:  
    Details see: **Create Directives** above  

#### Self-defined Structural Directive:  
    @input() set xx(condition:boolean){  
        if(!condition){  
            this.vr.createEmbeddedView(this.tr);  
        }else{  
            this.vr.clear();  
        }  
    }  
    constructor(private tr:TemplateRef<any>,private vr:ViewContentRef){}  
    <div *xx="xxCondition"></div>  

#### Directive Listener:
    @HostListener('xxevent') xxevent()  
    
#### Data Binding:
    @HostBinding('style.xx') xx:string='xxvalue'  

#### Property Binding:  
    @input() defaultColor:string="blue";  
    @input() highlightColor:string="red";  
    @HostBinding('style.backgroundColor') backgroundColor:string;  
    @HostListener(){this.backgroundColor=this.defaultColor;}  
    <p appxx [highlightcolor]="'red'" [defaultColor]="'blue'">..</p>  
    OR  
    @input() defaultColor:string="blue";  
    @input('appxx') highlightColor:string="red";  
    @HostBinding('style.backgroundColor') backgroundColor:string;  
    @HostListener(){this.backgroundColor=this.defaultColor;}  
    <p [appxx]="'red'" [defaultColor]="'blue'">..</p>  
    OR  
    <p appxx="red" defaultColor="blue">..</p> 

### ViewChild  
    @ViewChild('input001') input001:ElementRef  
    ondosth(){  
        xx:this.input001.nativeElement.value  
    }  
  
## ContentChild
    <p #content></p>  
    @contentchild('content') ct:ElementRef;  
    OnInit(){  
        console.log(this.ct.nativeElement.textContent);  
    }  

## ng-content
    Parent:  
    <app-xx-element *ngFor>  
        <p *ngIf>  
            {{xxElement.content}}  
        </p>  
    </app-xx-element>  
    Child:  
    <ng-content><ng-content>  
