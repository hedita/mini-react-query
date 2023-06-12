import ReactDOM from "react-dom/client";
import React from "react";
import Example from "./src/Example";
import { QueryClient, QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient()

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    )
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);