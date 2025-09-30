import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import { Layout } from '@/layout/Layout'
import { BASE_ROOT, DM } from '@/store/directory/directory'
import FigmaTest01 from '@/pages/figma-test-01/FigmaTest01'
import FigmaTest02 from '@/pages/figma-test-02/FigmaTest02'
import FigmaTest03 from '@/pages/figma-test-03/FigmaTest03'

export const AppRoutes = () => {
  return <>
    <BrowserRouter basename={BASE_ROOT}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={DM.TOP} element={<Home />} />
          <Route path={'/figma-test-01'} element={<FigmaTest01 />} />
          <Route path={'/figma-test-02'} element={<FigmaTest02 />} />
          <Route path={'/figma-test-03'} element={<FigmaTest03 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
