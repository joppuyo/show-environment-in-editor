import { registerPlugin } from '@wordpress/plugins';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';

// https://github.com/WordPress/gutenberg/issues/43049
import { PluginSidebar as PostEditorPluginSidebar } from '@wordpress/edit-post';
import { PluginSidebar as SiteEditorPluginSidebar } from '@wordpress/edit-site';

import ProductionIcon from './icons/ProductionIcon.js';
import ProductionIconHdpi from './icons/ProductionIconHdpi.js';
import StagingIcon from './icons/StagingIcon.js';
import StagingIconHdpi from './icons/StagingIconHdpi.js';
import DevelopmentIcon from './icons/DevelopmentIcon.js';
import DevelopmentIconHdpi from './icons/DevelopmentIconHdpi.js';
import LocalIcon from './icons/LocalIcon.js';
import LocalIconHdpi from './icons/LocalIconHdpi.js';
import isSiteEditor from "./isSiteEditor";

const getIcon = function () {
    if (window.seie_vars.environment === 'production') {
        return window.devicePixelRatio > 1 ? ProductionIconHdpi() : ProductionIcon();
    }
    if (window.seie_vars.environment === 'staging') {
        return window.devicePixelRatio > 1 ? StagingIconHdpi() : StagingIcon();
    }
    if (window.seie_vars.environment === 'development') {
        return window.devicePixelRatio > 1 ? DevelopmentIconHdpi() : DevelopmentIcon();
    }
    if (window.seie_vars.environment === 'local') {
        return window.devicePixelRatio > 1 ? LocalIconHdpi() : LocalIcon();
    }
    return ProductionIcon()
}

const getTypeString = function () {
    return window.seie_vars.environment_description;
}

const getTitle = function () {
    return window.seie_vars.environment_title;
}
domReady( function () {

    if (!window.seie_vars) {
        return;
    }

    const PluginSidebar = isSiteEditor() ? SiteEditorPluginSidebar : PostEditorPluginSidebar;


    const ShowEnvironmentInEditorSidebar = () => (
        <PluginSidebar name="show-environment-in-editor-sidebar" title={getTitle()} icon={ getIcon() }>
            <Panel>
                <PanelBody opened={ true }>
                    <PanelRow>
                        <div dangerouslySetInnerHTML={{__html: getTypeString()}}></div>
                    </PanelRow>
                </PanelBody>
            </Panel>
        </PluginSidebar>
    );
    registerPlugin( 'show-environment-in-editor', { icon: getIcon(), render: ShowEnvironmentInEditorSidebar } );
});

