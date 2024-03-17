<?php

namespace ThStarterPlugin\Service;

use Shopware\Core\Content\Mail\Service\AbstractMailService;
use Shopware\Core\Framework\Validation\DataBag\DataBag;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

// more info visit: https://shopwarian.com/how-to-send-emails-from-shopware-6-programmatically/

class EmailService
{
    private $mailService;

    public function __construct(
        AbstractMailService $mailService
    )
    {
        $this->mailService = $mailService;
    }

    /**
     * Method for sending an email notification
     *
     * @param array $recipients
     * @param string $senderName
     * @param string $subject
     * @param string $messageHtml
     * @param SalesChannelContext $salesChannelContext
     */
    public function sendMail(
        array $recipients,
        string $senderName,
        string $subject,
        string $messageHtml,
        SalesChannelContext $salesChannelContext
    )
    {
        $data = new DataBag();

        //basic e-mail data
        $data->set('recipients', $recipients);     //format: ['email address' => 'recipient name']
        $data->set('senderName', $senderName);
        $data->set('subject', $subject);
        $data->set('contentHtml', $messageHtml);
        $data->set('contentPlain', strip_tags($messageHtml));

        // dd($salesChannelContext->getSalesChannel()->getId());
        //set sales channel context
        $data->set('salesChannelId', $salesChannelContext->getSalesChannel()->getId());

        //send the e-mail
        $this->mailService->send($data->all(), $salesChannelContext->getContext(), []);

    }

    public function sendMail2(
        array $recipients,
        string $senderName,
        string $subject,
        string $messageHtml,
        $context
    )
    {
        $data = new DataBag();

        //basic e-mail data
        $data->set('recipients', $recipients);     //format: ['email address' => 'recipient name']
        $data->set('senderName', $senderName);
        $data->set('subject', $subject);
        $data->set('contentHtml', $messageHtml);
        $data->set('contentPlain', strip_tags($messageHtml));

        //set sales channel context
        //dd($context);
        $data->set('salesChannelId', "018d8b4325a87009914b5c44c8badb7d");


        //send the e-mail
        $this->mailService->send($data->all(), $context, []);

    }

}