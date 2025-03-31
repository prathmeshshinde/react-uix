# React UIX

Reusable React Components

## Installation

To install the package, run:

```sh
npm install react-uix
```

## Usage

### Button Component

```tsx
import React from "react";
import { Button } from "react-uix";

const App = () => (
  <Button type="primary" size="large">
    Click Me
  </Button>
);

export default App;
```

#### Button Props

- **type**: `primary` | `secondary` | `danger`
- **size**: `small` | `default` | `large`
- **htmlType**: `button` | `submit` | `reset`
- **className**: string;
- **onClick**: function (Callback function triggered on button click);

### Alert Component

```tsx
import React from "react";
import { Alert } from "react-uix";

const App = () => (
  <Alert type="success" message="This is a success alert!" closable />
);

export default App;
```

#### Alert Props

- **type**: `success` | `danger` | `warning` | `info`
- **message**: string
- **closable**: boolean

### Badge Component

```tsx
import React from "react";
import { Badge } from "react-uix";

const App = () => <Badge variant="secondary">New</Badge>;

export default App;
```

#### Badge Props

- **variant**: `secondary` | `outline` | `danger`

### Card Component

```tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "react-uix";

const App = () => (
  <Card className="edit-card">
    <CartHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CartHeader>
    <CardContent>// Add card content here</CardContent>
    <CardFooter>// Add footer content here</CardFooter>
  </Card>
);

export default App;
```

#### Card Props

- **className**: string (pass a className and change the styling)

### Input Component

```tsx
import React from "react";
import { Input } from "react-uix";

const App = () => (
  <Input
    type="text"
    placeholder="Enter your name"
    value="joe"
    onChange={(value) => console.log(value)}
  />
);

export default App;
```

#### Input Props

- **type**: `text` | `password` | `email` | `number` (Specifies the type of input)
- **placeholder**: string (Placeholder text for the input field)
- **value**: string (The current value of the input field)
- **onChange**: function (Callback function triggered when the input value changes)
- **className**: string
- **defaultValue**: string (The default value of the input field)

## Components

- **Button**: A customizable button component.
- **Alert**: A dismissible alert component.
- **Badge**: A badge component for displaying status or counts.
- **Card**: A card component for displaying content in a bordered container.
- **Input**: A flexible input field component.
