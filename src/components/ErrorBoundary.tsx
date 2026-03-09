import { Component, type ReactNode } from 'react'
import { RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
          <h2 className="text-lg font-bold mb-2">Nešto je pošlo po krivu</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Došlo je do neočekivane pogreške. Pokušajte ponovno.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="btn-primary flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Pokušaj ponovno
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
