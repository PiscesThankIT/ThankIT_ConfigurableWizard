<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace ThankIT\ConfigurableWizard\Block\Adminhtml\Product\Steps;

/**
 * @api
 * @since 100.0.2
 */
class Manual extends \Magento\Ui\Block\Component\StepsWizard\StepAbstract
{
    /**
     * {@inheritdoc}
     */
    public function getCaption()
    {
        return __('Optional');
    }
}