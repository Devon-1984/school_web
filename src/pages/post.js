// post.tsx
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return (
    <>
      <div className="text-primary-900 md:pl-12 md:pr-12 pl-6 pr-6">
        <div className="max-w-3xl mx-auto mt-20">
          <h1 className="text-5xl font-heading font-bold text-center text-primary-900">
            {router.query.slug}
          </h1>
          <p className="text-center text-lg text-primary-900 mt-2">
            25th Feb, 2024
          </p>
          <div className="mt-8 text-justify leading-relaxed">
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Vestibulum
              tempor nibh auctor mi ornare. Augue venenatis nisi hac, risus
              sagittis pretium aliquam accumsan. Posuere diam semper eleifend
              turpis elementum pellentesque torquent. Hac primis ex penatibus,
              lacinia mi lacus. Suscipit faucibus primis malesuada convallis
              feugiat. Iaculis nulla amet diam aptent vitae in urna auctor.
              Malesuada ut molestie enim auctor nunc. Nisi tellus curabitur
              aenean donec mauris sem. Magnis sem libero facilisis elit pretium
              ultrices non purus elit. Himenaeos suspendisse dolor convallis
              cras ridiculus vel convallis. Sem justo eleifend nascetur volutpat
              nisi varius nibh tellus! Egestas augue inceptos, suscipit
              convallis eu tristique. Eget cras maecenas, fusce quam primis
              aptent aptent habitasse. Ex tempus elementum eu viverra; velit
              bibendum mattis faucibus. Curabitur a volutpat interdum netus
              malesuada augue? Volutpat ex lacus nibh velit mi ridiculus.
              Maecenas nec sapien; ex quisque venenatis eget posuere conubia.
              Turpis fames tempus et libero nam. Mus inceptos tempor at, finibus
              id porta. Non conubia proin risus imperdiet molestie scelerisque
              pharetra. Semper pulvinar facilisis malesuada lobortis; id etiam
              massa a massa. Convallis vehicula auctor egestas ultrices eleifend
              conubia hendrerit tellus. Urna dolor sodales integer gravida
              phasellus per nisl. Phasellus libero convallis nisi hendrerit. Sit
              ac enim sagittis pellentesque quisque malesuada ultrices iaculis.
              Hac facilisis neque a varius mattis feugiat feugiat. Elementum
              finibus praesent quam elementum condimentum fusce primis auctor.
              Hendrerit pulvinar et litora, consectetur curae gravida. Aenean
              cras cubilia viverra laoreet porttitor arcu egestas platea. Magnis
              pulvinar metus montes lacinia cubilia; eros vulputate ex. Nisl
              ipsum ridiculus tempor vulputate tincidunt curabitur egestas
              etiam. Facilisis mus euismod maximus placerat viverra senectus
              aptent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
