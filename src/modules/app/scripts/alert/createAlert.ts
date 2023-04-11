export default function createAlert(severity: 'success' | 'error' | 'warning' | 'info', message: string) {
    return { message, severity }
}