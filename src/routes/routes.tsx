import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import { Layout } from '@/layout/Layout'
import { BASE_ROOT, DM } from '@/store/directory/directory'
import FigmaTest01 from '@/pages/figma-test-01/FigmaTest01'
import FigmaTest02 from '@/pages/figma-test-02/FigmaTest02'
import FigmaTest03 from '@/pages/figma-test-03/FigmaTest03'
import FigmaTest04 from '@/pages/figma-test-04/FigmaTest04'

export const AppRoutes = () => {
  return <>
    <BrowserRouter basename={BASE_ROOT}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={DM.TOP} element={<Home />} />
          <Route path={DM.FIGMA_TEST_01} element={<FigmaTest01 />} />
          <Route path={DM.FIGMA_TEST_02} element={<FigmaTest02 />} />
          <Route path={DM.FIGMA_TEST_03} element={<FigmaTest03 />} />
          <Route path={DM.FIGMA_TEST_04} element={<FigmaTest04 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
