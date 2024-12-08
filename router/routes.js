const routes = [
  {
    path: "/designer",
    component: () => import("layouts/print.vue"),
    children: [
      { path: "", component: () => import("src/pages/print/designer.vue")}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
