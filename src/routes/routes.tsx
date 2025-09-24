import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import { Layout } from '@/layout/Layout'
import { BASE_ROOT, DM } from '@/store/directory/directory'
import FigmaTest01 from '@/pages/figma-test-01/FigmaTest01'

export const AppRoutes = () => {
  return <>
    <BrowserRouter basename={BASE_ROOT}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={DM.TOP} element={<Home />} />
          <Route path={DM.FIGMA_TEST_01} element={<FigmaTest01 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
