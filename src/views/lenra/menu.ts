import { ViewRequest, Container, Flex, colors, padding, Image, Flexible, Text, Component, IComponent } from '@lenra/app'

export default function (_data: ViewRequest['data'], _props: ViewRequest['props']): Component<IComponent> | IComponent {
  return Container(
    Flex([
      Container(
        Image("logo.png")
      )
        .width(32)
        .height(32),
      Flexible(
        Container(
          Text("Hello World")
            .textAlign("center")
            .style({
              "fontWeight": "bold",
              "fontSize": 24,
            })
        )
      )
    ])
      .fillParent(true)
      .mainAxisAlignment("spaceBetween")
      .crossAxisAlignment("center")
      .padding({ right: 32 })
  )
    .color(colors.Colors.white)
    .boxShadow({
      blurRadius: 8,
      color: 0x1A000000,
      offset: {
        dx: 0,
        dy: 1
      }
    })
    .padding(padding.symmetric(32, 16))
}

