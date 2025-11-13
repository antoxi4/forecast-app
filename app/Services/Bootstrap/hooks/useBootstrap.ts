import React from "react"

import { bootstrapContext, BootstrapContext } from "../context/BootstrapContext"

export const useBootstrap = (): BootstrapContext => React.useContext<BootstrapContext>(bootstrapContext)