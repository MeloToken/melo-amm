import { MenuEntry } from '24testui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farm.melotoken.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farm and Stake',
    icon: 'FarmIcon',
    href: 'https://farm.melotoken.com/'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://melotoken.com/lottery'
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MELOFinance',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://melotoken.com/file/MELO-swap.pdf',
  },
]

export default config
