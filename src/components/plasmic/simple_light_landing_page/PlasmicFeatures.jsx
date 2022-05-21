// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qsjy1QNDN9YtWHkz6hQyNv
// Component: SKZU8nUhOvjKP5
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Header from "../../Header" // plasmic-import: v4jG8kQTLsahS/component
import Section from "../../Section" // plasmic-import: cl3lSb3Ph6uK45/component
import Bullet from "../../Bullet" // plasmic-import: Xz3qZuX73tHZGy/component
import Button from "../../Button" // plasmic-import: 0ADYCztlr3EHXz/component
import HomeCta from "../../HomeCta" // plasmic-import: DJ3QnguB9Qnac/component
import Footer from "../../Footer" // plasmic-import: _DEAkMPSWHhIX/component
import { useScreenVariants as useScreenVariantskk9VbBCwbMaDgY } from "./PlasmicGlobalVariant__Screen" // plasmic-import: Kk9vbBCwbMADgY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: qsjy1QNDN9YtWHkz6hQyNv/projectcss
import * as sty from "./PlasmicFeatures.module.css" // plasmic-import: SKZU8nUhOvjKP5/css
import simpleProjectD7RrEiqYqlVnR9 from "./images/simpleProject.png" // plasmic-import: D7RrEIQYqlVnR9/picture

export const PlasmicFeatures__VariantProps = new Array()

export const PlasmicFeatures__ArgProps = new Array()

function PlasmicFeatures__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskk9VbBCwbMaDgY(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fKlHc)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__r4Xzp)}
              >
                <div className={classNames(projectcss.all, sty.column__bjwDs)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__uNgIk)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cumsz
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sZptF
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___7DmiA
                      )}
                    />

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__cl5)}
                    />

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__pxcn)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__awFS
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___1DlXd
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__qLgYx
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__tojgO
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__w07Lx)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aIfO)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectD7RrEiqYqlVnR9,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined,
                    }}
                  />
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__c8Lgu)}
              >
                <div className={classNames(projectcss.all, sty.column___2Xr4D)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__tBpK2)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectD7RrEiqYqlVnR9,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined,
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__fc02Q)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__aLJiU)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cfRgf
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zlS1T
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__sTgry
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__aRdW3
                      )}
                    />

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__y5Uf)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qnqAj
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__tFbXt)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__lmSu1
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__masAx
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps,
    })

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures"
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`
  }
  return func
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,
  }
)

export default PlasmicFeatures
/* prettier-ignore-end */