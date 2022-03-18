import Tab1 from "$lib/components/tabs/Tab1.svelte"
import Tab2 from "$lib/components/tabs/Tab2.svelte"
import Tab3 from "$lib/components/tabs/Tab3.svelte"
import Tab4 from "$lib/components/tabs/Tab4.svelte"

import { writable } from 'svelte/store';

export const draftFloat = writable({
  name: '',
  description: '',
  url: '',
  ipfsHash: '',
  claimable: true,
  timelock: false,
  startTime: false,
  endTime: false,
  quantity: false,
  claimCodeEnabled: false,
  claimCode: '',
  transferrable: true,
});

export const tabs = writable ([{
  label: "Content",
  value: 0,
  component: Tab1,
  icon: "ic:outline-subtitles"

},
{
  label: "Tokens",
  value: 1,
  component: Tab2,
  // icon: "ant-design:link-outlined",
  icon: "icomoon-free:coin-dollar"

},
{
  label: "Tab 3",
  value: 2,
  component: Tab3,
  // icon: "icomoon-free:coin-dollar",
  icon: "fluent:collections-add-24-regular"

},
{
  label: "Tab 4",
  value: 3,
  component: Tab4,
  icon: "fa:diamond"

},
{
  label: "Tab 5",
  value: 4,
  component: Tab4,

  icon: "bi:card-image"

},
{
  label: "Tab 5",
  value: 5,
  component: Tab4,

  icon: "ic:outline-subtitles"
},
{
  label: "Tab 5",
  value: 6,
  component: Tab4,

  icon: "ic:outline-subtitles"
}
]);




export const theme = writable(null);

export const tab1data = writable({
  name: "",
  description: "",
})

export const tokens = writable([
  {
    id: 0,
    label: "FLOW",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145425/FlowLogo_myf3sv.svg",
    selected: false,
    amount:0,
  },
  {
    id: 1,
    label: "FUSD",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145831/FusdIcon_esmisr.svg",
    selected: false,
    amount:0,
  },
]);

export const selectedToken = writable(0)


export const collections = writable([
  {
    id: 0,
    label: "Basic Beasts",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618a0cea8665abc4610c4ca6_basic_beasts_o5telf.png",
    selected: false,
  },
  {
    id: 1,
    label: "Ballerz",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/618b83df2183ef7f2902c886_thumbnail_ballerz_jwtdpb.jpg",
    selected: false,
  },
  {
    id: 2,
    label: "Flovatar",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145169/619efc34fe0b49bb68dc20b8_flovatar_5-01_1_bo3h2k.png",
    selected: false,
  },
]);

export const modal = writable({
  title: "",
  action: "",
  opened: false
})

export const dialog = writable({
  title: "",
  action: "",
  opened: false
})


// draftFloat.subscribe((value) => {
//   console.log(value)
// })