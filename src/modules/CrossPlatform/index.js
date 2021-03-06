import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import keyBy from 'lodash.keyby'

import BigHeroLayout from 'components/BigHeroLayout'
import { Cross } from 'constants/data'

// eslint-disable-next-line react/display-name
const CrossPlatformModule = React.forwardRef((props, ref) => {
  const crossImages =
    keyBy(
      useStaticQuery(graphql`
      query {
        allFile(filter: {name: {regex: "/_cross/"}}) {
          edges {
            node {
              list: childImageSharp {
                fixed(width: 75, height: 75) {
                  src
                  originalName
                  srcSet
                  width
                  height
                  tracedSVG
                }
              },
              small: childImageSharp {
                fixed(width: 50, height: 50) {
                  src
                  originalName
                  srcSet
                  width
                  height
                  tracedSVG
                }
              },
              large: childImageSharp {
                fixed(width: 140, height: 140) {
                  src
                  originalName
                  srcSet
                  width
                  height
                  tracedSVG
                }
              },
            }
          }
        }
      }
      `).allFile.edges,
    e => get(e, `node.list.fixed.originalName`)) // eslint-disable-line

  return (
    <BigHeroLayout
      images={crossImages}
      ref={ref}
      styleProp={'main-cross'}
      {...Cross}
      {...props}/>
  )
})

export default CrossPlatformModule

// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
