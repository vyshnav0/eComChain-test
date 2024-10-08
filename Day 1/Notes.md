
Created a home component with `ng generate component home`  
This will create a home folder in your app folder and then add `home.component.ts`.

Inside the `app.component.ts`, import the HomeComponent as:  
```typescript
import { HomeComponent } from './home/home.component';
```

Add `HomeComponent` in the dependencies.  
Use the HomeComponent as:  
```html
<app-home></app-home>
```

We can change the HomeComponent code in `home.component.ts` to reflect that change in the website.  
Styles can be imported by:  
```typescript
styleUrls: [`./home.component.css`],
```
