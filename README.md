# simple-react-toast-notifications-s-k

A simple and customizable React toast notifications library.

## Installation

To install the package, run:

```bash
npm install simple-react-toast-notifications-s-k
```

Simply wrap your App component with ToastProvider

```bash
import ToastProvider from 'simple-react-toast-notifications-s-k/ToastProvider'

createRoot(document.getElementById('root')).render(
    <ToastProvider>
      <App />
    </ToastProvider>
)
```

Use addTost from useToasts()

### Available Toast Types

- **`success`**: Displays a success toast with a green background.
- **`error`**: Displays an error toast with a red background.
- **`info`**: Displays an informational toast with a blue background.
- **`warning`**: Displays a warning toast with a yellow background.

```bash
import { useToasts } from 'simple-react-toast-notifications-s-k/ToastProvider'

const App = () => {
  const { addToast } = useToasts()

  return (
    <div>
      <button onClick={() => addToast('Success notification!', 'success')}>
        Show Success Toast
      </button>
    </div>
  )
}

```

### Customizing `ToastProvider` Props

You can customize the `ToastProvider` with the following optional props:

- **`position`**: The position of the toast notifications. Default is `'bottom-right'`. Options include:

  - `'top-left'`
  - `'top-center'`
  - `'top-right'`
  - `'bottom-left'`
  - `'bottom-center'`
  - `'bottom-right'`

- **`containerStyles`**: Styles to apply to the container of all toasts (e.g., background color, padding, etc.).

- **`messageStyles`**: Styles to apply to the individual toast messages (e.g., font size, color, etc.).

- **`iconStyles`**: Styles to apply to any icons (if any) used inside the toast.

- **`closeAfter`**: The duration (in milliseconds) before the toast automatically disappears. Default is `3000` (3 seconds).

```bash
 <ToastProvider
      position="bottom-right"
      containerStyles={{ backgroundColor: '#333' }}
      messageStyles={{ color: 'white' }}
      iconStyles={{ fontSize: '20px' }}
      closeAfter={5000}
    >
```
