import type { Config } from "@measured/puck";
import Image from "next/image";
import { useContext } from "react";
import { ssrgetDataContex } from "./app/contex/ssrgetDataContex";

type Props = {
  HeadingBlock: { data:object };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
       data:{
        type:'external',
         fetchList: useContext(ssrgetDataContex)
}
},
      // defaultProps: {
      //   title: "Heading",
      // },
      render: ({data}) => (
        <div style={{ padding: 64 }}>
         <Image src={data.props.sprites.front_default} width={80} height={80} alt="pokemon"/>
        </div>
      ),
    ,
  },
}};

export default config;
