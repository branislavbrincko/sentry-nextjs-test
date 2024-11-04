// A faulty API route to test Sentry's error monitoring
export default function handler(_req, res) {
    throw new Error('Nejaky errorik')
    res.status(200).json({ name: 'John Doe' })
}
