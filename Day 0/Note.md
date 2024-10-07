

Using the official Angular dev tutorials to make a Hello World website.

A default setup was cloned from the official docs to Google Index. The changes made are:

1. Replace title element in `first-app/src/index.html` from Default to Home.
   ```html
   <title>Home</title>
   ```
   This would change the title of the webpage in the tab.

2. In `first-app/src/app/app.component.ts`, update the `@Component` decorator's template from Default to Hello World.
   ```typescript
   template: `
     <h1>Hello world!</h1>
   `,
   ```
   The template property defines the HTML content that will be rendered by a component. So, the app component will have the `<h1>` tag with "Hello world".

3. In the same `app.component.ts`, modify the `AppComponent` class definition of title to homes.
   ```typescript
   export class AppComponent {
     title = 'homes';
   }
   ```
   This initializes a property `title` with the value of homes. It is not used at the moment but can be used to render dynamic content to the website. For example:
   ```typescript
   template: `
     <h1>{{ title }}</h1>
   `,
   ```
   Now, since `title` holds "homes" as a value, it will be displayed there.
