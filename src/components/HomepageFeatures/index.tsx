import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Level 1: Code Your Own Path!",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Start from scratch and learn programming step-by-step. Grasp the basics
        with simple examples and begin creating your own projects. Join us now
        and embark on your coding journey!
      </>
    ),
  },
  {
    title: "Level 2: Enhance Your Skills, Expand Your Projects!",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Take your programming skills to the next level. Challenge yourself with
        complex projects and real-world examples. Explore new languages and
        frameworks to broaden your technical expertise!
      </>
    ),
  },
  {
    title: "Level 3: Master Your Craft and Make an Impact!",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Deepen your software development skills at a professional level. Enhance
        your ability to solve complex problems and build industry-standard
        projects. Advance your career and become a leader in software
        development!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
