export const serverHostname = () => {
    return process.env.NODE_ENV === 'production' ? '/ads/api' : 'http://localhost:8080/ads/api'
}