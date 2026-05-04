import { memo, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import { Home, Ipoteka, Iqclub, IzumrudniVillage,NashiProekti,SectionDetails, Komanda, Konstantinovka, SectionId, Kontakti, Novosti, OdnoEtazniy, SMIonas, TaunXaunsi, Usadi, VseDoma, ZimnayaGorka, SectionId1, DvuxEtazhniy } from './router/router'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gray-100 border-t-[#E29853] rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium animate-pulse">Загрузка...</p>
          </div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/ipoteka',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Ipoteka />
          </Suspense>
        )
      },
      {
        path: '/kontakti',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Kontakti />
          </Suspense>
        )
      },
      {
        path: '/IzumrudniVillage',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <IzumrudniVillage />
          </Suspense>
        )
      },
      {
        path: '/Iqclub',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Iqclub />
          </Suspense>
        )
      },
      {
        path: '/usadi',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Usadi />
          </Suspense>
        )
      },
      {
        path: '/ZimnayaGorka',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <ZimnayaGorka />
          </Suspense>
        )
      },
      {
        path: '/Konstantinovka',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Konstantinovka />
          </Suspense>
        )
      },
      {
        path: '/NashiProekti',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <NashiProekti />
          </Suspense>
        )
      },
      {
        path: '/OdnoEtazniy',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <OdnoEtazniy />
          </Suspense>
        )
      },
      {
        path: '/DvuxEtazhniy',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <DvuxEtazhniy />
          </Suspense>
        )
      },
      {
        path: '/TaunXaunsi',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <TaunXaunsi />
          </Suspense>
        )
      },
      {
        path: '/VseDoma',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <VseDoma />
          </Suspense>
        )
      },
        {
          path: '/SectionDetails/:id',
          element: (
            <Suspense fallback={<div>Загрузка проекта...</div>}>
              <SectionDetails />
            </Suspense>
          )
        },  
      {
        path: '/Komanda',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Komanda />
          </Suspense>
        )
      },
      {
        path: '/SMIonas',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <SMIonas />
          </Suspense>
        )
      },
      {
        path: '/SMIonas/:id',
        element: (
          <Suspense fallback={<div>Загрузка статьи...</div>}>
            <SectionId />
          </Suspense>
        )
      },

      {
        path: '/Novosti',
        element: (
          <Suspense fallback={<div>Load...</div>}>
            <Novosti />
          </Suspense>
        )
      },
      {
        path: '/Novosti/:id',
        element: (
          <Suspense fallback={<div>Загрузка статьи...</div>}>
            <SectionId1 />
          </Suspense>
        )
      }

    ]
  }
])
const App = memo(() => {


  return <RouterProvider router={router} />
})

export default App
