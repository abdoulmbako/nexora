import { useRouter } from 'next/router'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Product Detail: {id}</h1>
    </div>
  )
}
