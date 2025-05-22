
import { Home } from '../Pages/Home'
import { BestSeller } from '../Pages/BestSeller'
import { EarlyStory } from '../Pages/EarlyStory'
import { NewCollection } from '../Pages/NewCollection'
import { Footer } from '../Pages/Footer'

export const HomeLayout = () => {
  return (
    <>
        <Home />
        <BestSeller />
        <EarlyStory />
        <NewCollection />
        <Footer />
    </>
  )
}
