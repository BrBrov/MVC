### Instruction:
- git clone this repo
- ***npm install***
- ***npm run dev*** (for developer) or ***npm run build*** (for build project)

#### Project completed with Vite.

### MVC
![MVC](./assets/mvc-perfomance.png)

### ***Model***

#### The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application. In Smalltalk-80, the design of a model type is left entirely to the programmer. With WebObjects, Rails, and Django, a model type typically represents a table in the application's database.

### ***View***

#### Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

#### In Smalltalk-80, a view is just a visual representation of a model, and does not handle user input. With WebObjects, a view represents a complete user interface element such as a menu or button, and does receive input from the user. In both Smalltalk-80 and WebObjects, however, views are meant to be general-purpose and composable.

#### With Rails and Django, the role of the view is played by HTML templates, so in their scheme a view specifies an in-browser user interface rather than representing a user interface widget directly. (Django opts to call this kind of object a "template" in light of this.) This approach puts relatively less emphasis on small, composable views; a typical Rails view has a one-to-one relationship with a controller action.

#### Smalltalk-80 views communicate with both a model and a controller, whereas with WebObjects, a view talks only to a controller, which then talks to a model. With Rails and Django, a view/template is used by a controller/view when preparing a response to the client.

### ***Controller***

#### Accepts input and converts it to commands for the model or view.

#### A Smalltalk-80 controller handles user input events, such as button presses or mouse movement. At any given time, each controller has one associated view and model, although one model object may hear from many different controllers. Only one controller, the "active" controller, receives user input at any given time; a global window manager object is responsible for setting the current active controller. If user input prompts a change in a model, the controller will signal the model to change, but the model is then responsible for telling its views to update.

#### In WebObjects, the views handle user input, and the controller mediates between the views and the models. There may be only one controller per application, or one controller per window. Much of the application-specific logic is found in the controller.

#### In Rails, requests arriving at the on-server application from the client are sent to a "router", which maps the request to a specific method of a specific controller. Within that method, the controller interacts with the request data and any relevant model objects and prepares a response using a view. Conventionally, each view has an associated controller; for example, if the application had a Client View, it would typically have an associated Clients controller as well. However, developers are free to make other kinds of controllers if they wish.

#### Django calls the object playing this role a "view" instead of a controller. A Django view is a function that receives a web request and returns a web response. It may use templates to create the response.

### ***Interactions***

#### In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.

- The model is responsible for managing the data of the application. It receives user input from the controller.

- The view renders presentation of the model in a particular format.
The controller responds to the user input and performs interactions on the data model objects.

- The controller receives the input, optionally validates it and then passes the input to the model.

#### As with other software patterns, MVC expresses the "core of the solution" to a problem while allowing it to be adapted for each system. Particular MVC designs can vary significantly from the traditional description here.