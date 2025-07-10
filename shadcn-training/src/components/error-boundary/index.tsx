import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../icons';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
          <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-10 text-center animate-fade-in">
            <div className="text-6xl mb-4">😥</div>
            <h1 className="text-5xl font-extrabold text-red-500 mb-2">Oops!</h1>
            <p className="text-lg text-gray-800 mb-4 font-medium">Something went wrong.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're sorry for the inconvenience. You can try refreshing the page, or use the button
              below to return to the homepage.
            </p>
            <Link
              to="/"
              className="flex items-center gap-3.5 w-max mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 shadow-md"
            >
              <ArrowIcon width="20px" height="20px" />
              <span>Go to Home</span>
            </Link>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
