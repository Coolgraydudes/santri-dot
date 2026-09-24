import React from "react"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import Layout from "./Layout"

function Home() {
  return (
    <Layout>

      <h1 className="text-2xl font-bold">
        Home
      </h1>

      <p className="mt-2">
        Ini halaman home.
      </p>

      <div className="mt-4 flex gap-2">
        <Input placeholder="Input..." />

        <Button>
          Submit
        </Button>
      </div>

    </Layout>
  )
}

export default Home