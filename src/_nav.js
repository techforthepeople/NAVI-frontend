export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'warning',
        text: 'URGENT',
      },
    },
    {
      title: true,
      name: 'Network',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Responders',
      url: '/theme/colors',
      icon: 'icon-user',
    },
    {
      name: 'New Responder',
      url: '/theme/typography',
      icon: 'icon-plus',
    },
  ],
};
