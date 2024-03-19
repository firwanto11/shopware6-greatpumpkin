<?php
namespace ThStarterPlugin\Subscriber;

use Psr\Log\LoggerInterface;
use Shopware\Core\Checkout\Cart\Event\CheckoutOrderPlacedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use ThStarterPlugin\Service\EmailService;

class OrderPlacedSubscriber implements EventSubscriberInterface
{
    private $logger;
    private $emailService; // Add this line

    // Modify the constructor to inject the EmailService
    public function __construct(LoggerInterface $logger, EmailService $emailService)
    {
        $this->logger = $logger;
        $this->emailService = $emailService; // Initialize the emailService
    }
    public static function getSubscribedEvents(): array
    {
        return [
            CheckoutOrderPlacedEvent::class => 'onOrderPlaced'
        ];
    }

    public function onOrderPlaced(CheckoutOrderPlacedEvent $event): void
    {
        /*
        $orderId = $event->getOrderId();
        $state = $event->getOrder()->getStateMachineState()->getName();

        $this->logger->notice('onOrderPlaced orderId: '.var_export($orderId, true));
        $this->logger->notice('onOrderPlaced state: '.var_export($state, true));*/
        $orderId = $event->getOrderId();
        $state = $event->getOrder()->getStateMachineState()->getName();

        // Use emailService to send the order ID via email
        $recipients = ['unbeatable3d@gmail.com' => 'Recipient Name']; // Define your recipient(s) here
        $senderName = 'test';
        $subject = 'aaaa';


        $order = $event->getOrder();
        $orderId = $order->getId();
        $orderNumber= $order->getOrderNumber();
        $items = $order->getLineItems();
        //dd($order);
        //$test="";
        $sendEmail=false;
        if ($items !== null) {
            foreach ($items as $item) {
                //$itemId = $item->getId();
                $productName = $item->getLabel(); // or use $item->getReferencedId() to get the product ID
                //$test.=",".$productName;
                //$quantity = $item->getQuantity();
                // Here you can process each item as needed, for example, log them or prepare them for an email
                //$this->logger->notice("Item in Order: {$orderId}, Product Name: {$productName}, Quantity: {$quantity}");

                // For email, you might want to compile a list or a detailed string of these items
                if ($productName=="Consultation Service")
                {
                    $sendEmail=true;
                }
            }
        }
        $messageHtml = "Order ID: {$orderNumber} with consultation service has been placed";
        /*
        $this->emailService->sendMail2(
            $recipients,
            $senderName,
            $subject,
            $messageHtml,
            $event->getContext()
        );*/
    }
}